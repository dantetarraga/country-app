import ReactCountryFlag from 'react-country-flag'
import { useMobile } from '../../hooks/useMobile'
import IconClose from '../icons/IconClose'
import CountryImage from './CountryImage'

const REGIONS = ['Tucuman', 'Jujuy', 'Cordoba', 'Santa Cruz', 'Mendoza', 'Buenos Aires', 'Chaco', 'Chubut', 'Entre Rios', 'Formosa', 'La Pampa', 'La Rioja', 'Misiones']

const CountryDetails = ({ country, onSelectCountry }) => {
  const { isMobile } = useMobile()

  if (!country) return null
  const handleOnClose = () => onSelectCountry(null)

  return (
    <section
      className={`relative transition-transform duration-300 ease-in-out
        ${isMobile ? 'fixed top-0 right-0 h-full' : ''}
        ${country ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div
        className='relative bg-white rounded-lg shadow-2xl md:p-10 p-5 md:w-[350px] w-[250px]'
      >
        <div
          className='rounded-full md:top-2 md:right-2 top-0 -right-1 absolute hover:bg-gray-100 cursor-pointer p-2 transition-colors ease-in-out duration-200'
          onClick={handleOnClose}
        >
          <IconClose />
        </div>

        <CountryImage countryName={country.name} />

        <div className='p-2 flex items-center gap-3'>
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
        </div>

        <div className='space-y-1 p-2'>
          <InfoRow label='Capital' value={country.capital} />
          <InfoRow label='Language' value={country.languages[0]?.name} />
          <InfoRow label='Population' value='500 k people' />
          <InfoRow label='Currency' value={country.currency} />
          <RegionList />
        </div>
      </div>
    </section>
  )
}

const InfoRow = ({ label, value }) => (
  <div className='flex justify-between'>
    <span className='font-semibold text-blue-500'>{label}:</span>
    <span className='text-gray-400 font-medium text-sm'>{value != null ? value : 'No hay datos'}</span>
  </div>
)

const RegionList = () => {
  return (
    <>
      <p className='font-semibold text-blue-500'>Region</p>
      <div className='bg-white rounded-lg shadow-md p-4 max-w-xs'>
        <div className='max-h-32 overflow-y-auto'>
          <ul>
            {REGIONS.map((region, index) => (
              <li
                key={index}
                className='text-gray-400 font-medium text-sm hover:bg-gray-100 px-2 py-1 rounded-md transition-colors duration-200'
              >
                {region}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default CountryDetails
