import React, { useState, useEffect } from 'react'
import './timer.css'

function Timer() {
    const [initialMinutes, setInitialMinutes] = useState('0')
    const [secondsRemaining, setSecondsRemaining] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        let interval = null

        if (isActive && secondsRemaining > 0) {
            interval = setInterval(() => {
                setSecondsRemaining((prevSeconds) => prevSeconds - 1)
            }, 1000)
        } else if (secondsRemaining === 0 && isActive) {
            setIsActive(false)
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [isActive, secondsRemaining])

    const startTimer = () => {
        if (!isActive && initialMinutes > 0) {
            setSecondsRemaining(initialMinutes * 60)
            setIsActive(true)
            setErrorMessage('')
        }
    }

    const pauseTimer = () => {
        setIsActive(false)
    }

    const resetTimer = () => {
        setIsActive(false)
        setSecondsRemaining(initialMinutes * 60)
    }

    const handleInputChange = (e) => {
        const value = Number(e.target.value)

        if (value > 60) {
            setErrorMessage('O valor máximo permitido é 60 minutos.')
        } else {
            setErrorMessage('')
            setInitialMinutes(value)
        }
    }

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
            .toString()
            .padStart(2, '0')}`
    }

    const isInputValid = initialMinutes > 0 && initialMinutes <= 60

    return (
        <div className='container--timer'>
            <label htmlFor="minutesInput">Minutos:</label>
            <input 
                id="minutesInput"
                type="number"
                value={initialMinutes}
                onChange={handleInputChange}
                disabled={isActive} // Desativa o campo ao iniciar o timer
                min="0"
                max="60"
            />
            {errorMessage && <p style={{ color: 'red', fontSize: 18}}>{errorMessage}</p>}
            <p className='container--timer-clock'>{formatTime(secondsRemaining)}</p>
            <button class="btn btn-primary btn-lg"
                onClick={startTimer}
                disabled={!isInputValid || isActive}
            >
                Iniciar
            </button>
            <button class="btn btn-primary btn-lg"
                onClick={pauseTimer}
                disabled={!isActive}
            >
                Pausar
            </button>
            <button class="btn btn-primary btn-lg"
                onClick={resetTimer}
                disabled={!isActive && secondsRemaining === 0}
            >
                Reiniciar
            </button>
        </div>
    )
}

export default Timer


