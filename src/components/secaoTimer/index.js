import React, { useState ,useEffect } from 'react';
import * as S from './styled';

export default function App() {
    const [dias, setDias] = useState();
    const [horas, setHoras] = useState();
    const [minutos, setMinutos] = useState();
    const [segundos, setSegundos] = useState();
    
    useEffect(() => {
        function countdown() {
            var now = new Date();
            var eventDate = new Date("Nov 29, 2021 00:00:00");
            var currentTiime = now.getTime();
            var eventTime = eventDate.getTime();
            var remTime = eventTime - currentTiime;
            
            var d = Math.floor(remTime / (1000 * 60 * 60 * 24));
            var h = Math.floor((remTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var m = Math.floor((remTime % (1000 * 60 * 60)) / (1000 * 60));
            var s = Math.floor((remTime % (1000 * 60)) / 1000);

            setDias(d);
            setHoras(h);
            setMinutos(m);
            setSegundos(s);
            setTimeout(countdown, 1000);

            if (remTime < 0) {
                clearInterval(countdown);
                setDias(0);
                setHoras(0);
                setMinutos(0);
                setSegundos(0); 
                document.getElementById("Encerramento").innerHTML = "Fim!"; 
            }} 
            countdown()
        },[])
    
    return (
      <>
        <S.Timer id="countdown_dashboard">
            <h3>Contagem regressiva para nosso saldão de preços!</h3>
            <div class="dashp">
                <span class="dashtitle">Dias</span>
                <p id="days">{dias}</p>
            </div>
            <div class="dashp">
                <span class="dashtitle">Horas</span>
                <p id="hours">{horas}</p>
            </div>
            <div class="dashp">
                <span class="dashtitle">Minutos</span>
                <p id="minutes">{minutos}</p>
            </div>
            <div class="dashp">
                <span class="dashtitle">Segundos</span>
                <p id="seconds">{segundos}</p>
            </div>
            <div class="encerramento">
                <p id="Encerramento"></p>
            </div>
        </S.Timer>
      </>
    );
}
