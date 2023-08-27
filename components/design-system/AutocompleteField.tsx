import { Combobox } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'

type ItemProps = { name: any; id: any }

type AutocompleteFieldProps = {
  data: any[]
  defaultValue?: any
  disabled?: boolean
  onChange: any
  filter?: (item: ItemProps, query: string) => boolean
  placeholder?: string
  label?: string
}

const defaultFilter = (item: ItemProps, query: string) => {
  return item.name.toLowerCase().includes(query.toLowerCase())
}

const AutocompleteField = ({
  label,
  data,
  filter = defaultFilter,
  defaultValue,
  disabled = false,
  onChange,
  placeholder,
}: AutocompleteFieldProps) => {
  const [selectedItem, setSelectedItem] = useState(defaultValue)
  const [query, setQuery] = useState('')

  const filteredData =
    query === '' ? data : data.filter((item) => filter(item, query))

  useEffect(() => {
    setSelectedItem(defaultValue)
  }, [defaultValue])

  return (
    <Combobox
      value={selectedItem}
      onChange={(value) => {
        setSelectedItem(value)
        onChange(value)
      }}
      defaultValue={defaultValue}
      disabled={disabled}
    >
      <div className="relative">
        {label && (
          <Combobox.Label className="text-biography-sm font-medium text-biography-gray-700">
            {label}
          </Combobox.Label>
        )}
        <div className="flex space-between px-[13px] py-[9px] bg-white text-biography-md text-biography-gray-900 placeholder-biography-gray-500 border border-1 border-biography-gray-300 rounded w-full shadow-sm focus-within:shadow-md focus-within:border-biography-primary-500 focus-within:border-2 focus-within:-m-[1px] disabled:text-biography-gray-500 disabled:bg-biography-gray-50">
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(item: any) => item.name}
            className="flex-grow outline-none appearance-none placeholder:font-normal placeholder-biography-gray-500"
            placeholder={placeholder}
            autoComplete="off"
          />
          <Combobox.Button>
            <ChevronDownIcon className="block w-5 h-5 text-biography-gray-500" />
          </Combobox.Button>
        </div>
        <Combobox.Options>
          <div className="absolute w-full mt-1 max-h-60 overflow-auto border border-biography-gray-200 shadow-md rounded-xl">
            {filteredData.map((item) => (
              <Combobox.Option
                key={item.name}
                value={item}
                className={({ active }) =>
                  `px-[13px] py-[11px] flex flex-row gap-2 justify-between items-center text-biography-text-md font-medium ${
                    active ? 'bg-biography-primary-50' : 'bg-white'
                  }`
                }
              >
                {({ selected, active }) => (
                  <>
                    <span>{item.name}</span>
                    {selected && (
                      <CheckIcon
                        className="h-5 w-5 text-biography-primary-600"
                        aria-hidden="true"
                      />
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </div>
        </Combobox.Options>
      </div>
    </Combobox>
  )
}

export { AutocompleteField }
