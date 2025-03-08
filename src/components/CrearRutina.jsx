import { useEffect, useState } from 'react';

const addExercise = () => {
    console.log(nombreRutina + nombreEjercicio + series + reps + peso);
}

export default function CrearRutina() {
    const [exercises, setExercises] = useState([]);
    const [nombreRutina, setNombreRutina] = useState('');
    const [nombreEjercicio, setNombreEjercicio] = useState('');
    const [series, setSeries] = useState('');
    const [reps, setReps] = useState('');
    const [peso, setPeso] = useState('');

    return (
        <div>
            <form className="hidden">
                <div>
                    Nombre de la rutina
                    <input
                        value={nombreRutina} onChange={e => setNombreRutina(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="target-muscle">Filtro</label>
                    <select id="target-muscle" name="target-muscle">
                        <option value="todos">Todos</option>
                        <option value="wrists">Muñecas</option>
                        <option value="biceps">Biceps</option>
                        <option value="biceps">Biceps</option>
                        <option value="biceps">Biceps</option>
                        <option value="biceps">Biceps</option>
                    </select>
                </div>

                <div>
                    <div>
                        Agregar Ejercicio
                        <input
                            value={nombreEjercicio}
                            onChange={e => setNombreEjercicio(e.target.value)}
                            type="search" placeholder='Nombre' />
                    </div>
                    <div>
                        <input value={series} onChange={e => setSeries(e.target.value)} placeholder='Series' />
                        <input value={reps} onChange={e => setReps(e.target.value)} placeholder='Reps' />
                        <input value={peso} onChange={e => setPeso(e.target.value)} placeholder='Peso' />

                        <button type="button" onClick={() => addExercise()}>+</button>
                    </div>

                    <button type="submit">Guardar Rutina</button>
                </div>
            </form>
        </div>

    );
}


