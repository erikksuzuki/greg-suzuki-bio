import { useState } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'

type PlacesAutocompleteFieldProps = {
  label?: string
  placeholder?: string
  handlePlacesSelect: any
}

const PlacesAutocompleteField = ({
  label,
  placeholder = 'Search Places...',
  handlePlacesSelect,
}: PlacesAutocompleteFieldProps) => {
  const [googlePlacesInputValue, setGooglePlacesInputValue] = useState<any>('')
  const handleSelect = (address: any) => {
    setGooglePlacesInputValue(address)
    handlePlacesSelect(address)
  }
  return (
    <PlacesAutocomplete
      value={googlePlacesInputValue}
      onChange={setGooglePlacesInputValue}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
        const suggestionContainerClass = suggestions.length
          ? 'absolute w-full mt-1 max-h-60 overflow-auto border border-lazarus-gray-200 shadow-md rounded-xl'
          : ''
        return (
          <div className="relative">
            {label && (
              <div className="text-lazarus-sm font-medium text-lazarus-gray-700">
                {label}
              </div>
            )}
            <div className="flex space-between px-[13px] py-[9px] bg-white text-lazarus-md text-lazarus-gray-900 placeholder-lazarus-gray-500 border border-1 border-lazarus-gray-300 rounded w-full shadow-sm focus-within:shadow-md focus-within:border-lazarus-primary-500 focus-within:border-2 focus-within:-m-[1px] disabled:text-lazarus-gray-500 disabled:bg-lazarus-gray-50">
              <input
                {...getInputProps({
                  placeholder: placeholder,
                  className:
                    'flex-grow outline-none appearance-none placeholder:font-normal placeholder-lazarus-gray-500',
                })}
              />
              {loading && (
                <div className="text-lazarus-primary-700 loading-ellipsis w-6 relative -top-2"></div>
              )}
            </div>
            <div className={suggestionContainerClass}>
              {suggestions.map((suggestion) => {
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className: `px-[13px] py-[11px] cursor-pointer flex flex-row gap-2 justify-between items-center text-lazarus-text-md font-medium ${
                        suggestion.active ? 'bg-lazarus-primary-50' : 'bg-white'
                      }`,
                    })}
                    key={suggestion.description}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )
      }}
    </PlacesAutocomplete>
  )
}

export { PlacesAutocompleteField }