/* eslint-disable no-unused-vars */
import Form from 'react-bootstrap/Form'
import { AUTO_LANGUAGE, SUPORTED_LANGUAGES } from '../constants'
import {type FC} from 'react'
import { SectionType, type FromLanguage, type Language } from '../types.d'

// interface Props {
//   onChange: (language: Language) => void
// }

type Props =
| {type: SectionType.From, value: FromLanguage, onChange:(language: FromLanguage) => void}
| {type: SectionType.To, value: Language, onChange:(language: Language) => void}

export const LanguageSelector: FC<Props> = ({onChange, type, value}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }
  return (
    <Form.Select aria-label="Selecciona el Idioma" onChange={handleChange} value={value}>
      {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar Idioma</option>}
      {Object.entries(SUPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  )
}

