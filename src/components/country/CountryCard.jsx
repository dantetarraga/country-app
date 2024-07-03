import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import CountryImage from './CountryImage'

const CountryCard = ({ country, onSelectCountry }) => {
  const handleSelectCountry = () => onSelectCountry(country)

  return (
    <div className='shadow-lg rounded-lg cursor-pointer h-[230px]' onClick={handleSelectCountry}>
      <CountryImage countryName={country.name} />

      <main className='p-2 flex items-center gap-3'>
        <ReactCountryFlag
          countryCode={country.code}
          svg
          style={{
            width: '2.5em',
            height: '2.5em'
          }}
          title={country.name}
        />

        <div>
          <h2 className='text-sky-500 font-bold leading-none'>{country.name}</h2>
          <p className='text-gray-400 font-medium text-sm '>{country.continent.name}</p>
        </div>
      </main>
    </div>
  )
}

export default CountryCard
