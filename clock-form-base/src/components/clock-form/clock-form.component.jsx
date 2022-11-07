import { useEffect, useState } from 'react'
import './clock-form.style.css'

const ClockForm = ({ onChangeClockInfo, initialClockInfo }) => {
  const [clock, setClock] = useState({ ...initialClockInfo })
  const [invalid, setInvalid] = useState({})

  useEffect(() => {
    const { description, hours, monutes, seconds } = clock

    console.log(clock)
    if (description.length >= 2 && description.length <= 20) {
      setInvalid({ ...invalid, description: true })
    } else {
      setInvalid({ ...invalid, description: false })
    }
    if (hours >= 0 && hours < 24) {
      setInvalid({ ...invalid, 1: true })
    } else {
      setInvalid({ ...invalid, hours: false })
    }
    if (monutes >= 0 && monutes < 60) {
      setInvalid({ ...invalid, minutes: true })
    } else {
      setInvalid({ ...invalid, minutes: false })
    }
    if (seconds >= 0 && seconds < 60) {
      setInvalid({ ...invalid, seconds: true })
    } else {
      setInvalid({ ...invalid, seconds: false })
    }
  }, [clock])

  function handleChange(eventChange) {
    const { name, value } = eventChange.target

    setClock(currentValues => ({ ...currentValues, [name]: value }))
  }

  function handleSubmit(eventSubmit) {
    if (Object.values(invalid).every(item => item)) {
      onChangeClockInfo(clock)
    }

    eventSubmit.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="clock-form">
      <input
        onChange={handleChange}
        value={clock.description}
        autoComplete="off"
        className="clock-form__input"
        placeholder="Descrição"
        name="description"
      />
      <input
        onChange={handleChange}
        value={clock.hours}
        autoComplete="off"
        className="clock-form__input"
        placeholder="Horas"
        name="hours"
      />
      <input
        onChange={handleChange}
        value={clock.minutes}
        autoComplete="off"
        className="clock-form__input"
        placeholder="Minutos"
        name="minutes"
      />
      <input
        onChange={handleChange}
        value={clock.seconds}
        autoComplete="off"
        className="clock-form__input"
        placeholder="Segundos"
        name="seconds"
      />

      {invalid.description && <p>description invalid</p>}
      {invalid.hours && <p>hours invalid</p>}
      {invalid.minutes && <p>minutes invalid</p>}
      {invalid.seconds && <p>seconds invalid</p>}

      <button type="submit" className="clock-form__button">
        Atualizar
      </button>
    </form>
  )
}

export { ClockForm }
