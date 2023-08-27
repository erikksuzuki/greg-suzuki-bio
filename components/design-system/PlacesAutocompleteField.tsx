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
          ? 'absolute w-full mt-1 max-h-60 overflow-auto border border-biography-gray-200 shadow-md rounded-xl'
          : ''
        return (
          <div className="relative">
            {label && (
              <div className="text-biography-sm font-medium text-biography-gray-700">
                {label}
              </div>
            )}
            <div className="flex space-between px-[13px] py-[9px] bg-white text-biography-md text-biography-gray-900 placeholder-biography-gray-500 border border-1 border-biography-gray-300 rounded w-full shadow-sm focus-within:shadow-md focus-within:border-biography-primary-500 focus-within:border-2 focus-within:-m-[1px] disabled:text-biography-gray-500 disabled:bg-biography-gray-50">
              <input
                {...getInputProps({
                  placeholder: placeholder,
                  className:
                    'flex-grow outline-none appearance-none placeholder:font-normal placeholder-biography-gray-500',
                })}
              />
              {loading && (
                <div className="text-biography-primary-700 loading-ellipsis w-6 relative -top-2"></div>
              )}
            </div>
            <div className={suggestionContainerClass}>
              {suggestions.map((suggestion) => {
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className: `px-[13px] py-[11px] cursor-pointer flex flex-row gap-2 justify-between items-center text-biography-text-md font-medium ${
                        suggestion.active
                          ? 'bg-biography-primary-50'
                          : 'bg-white'
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
