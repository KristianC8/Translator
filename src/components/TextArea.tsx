import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

// type Props =
// | {type: SectionType.From, loading?: undefined, onChange: (value: string) =>  void, value: string }
// | {type: SectionType.To, loading?: undefined, onChange: (value: string) =>  void, value: string }

interface Props {
    type: SectionType,
    loading?: boolean,
    // eslint-disable-next-line no-unused-vars
    onChange: (value: string) => void
    value:string
}

const commonStyles = {border:0, height:'200px', resize:'none'}

const getPlaceholder = ({type, loading}: {type: SectionType, loading?: boolean}) => {
  if(type === SectionType.From) return 'Introducir texto'
  if(loading === true) return 'Traduciendo...'
  return 'Traducción'
}

export const TextArea = ({ type, loading, value, onChange}: Props) => {
  const styles = type === SectionType.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#f5f5f5' }

  const handleChage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      autoFocus={type === SectionType.From}
      as='textarea'
      disabled={type === SectionType.To}
      placeholder={getPlaceholder({type, loading})}
      style={styles}
      value={value}
      onChange={handleChage}
    />
  )
}
