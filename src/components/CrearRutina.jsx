import { useEffect, useState } from 'react';

export default function CrearRutina() {
    const [exercises, setExercises] = useState([]);
    const [nombreRutina, setNombreRutina] = useState('');
    const [nombreEjercicio, setNombreEjercicio] = useState('');
    const [series, setSeries] = useState('');
    const [reps, setReps] = useState('');
    const [peso, setPeso] = useState('');
    const [ejerciciosGuardados, setEjerciciosGuardados] = useState([]);
    const [rutina, setRutina] = useState([]);

    useEffect(() => {
        fetch('https://exercisedb-api.vercel.app/api/v1/exercises')
            .then(response => response.json())
            .then(data => setExercises(data.data.exercises));
    }, []);

    const addExercise = () => {
        const newExercise = {
            nombre: nombreEjercicio,
            series: series,
            reps: reps,
            peso: peso
        }

        setEjerciciosGuardados([...ejerciciosGuardados, newExercise]);
        console.log(ejerciciosGuardados);
    }

    const guardarRutina = (event) => {
        event.preventDefault();
        const newRutina = {
            nombreRutina,
            ejerciciosGuardados
        }

        setRutina([...rutina, newRutina]);
        setEjerciciosGuardados([]);
        console.log(rutina);
    }


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
                        <input type='number' value={series} onChange={e => setSeries(e.target.value)} placeholder='Series' />
                        <input type='number' value={reps} onChange={e => setReps(e.target.value)} placeholder='Reps' />
                        <input type='number' value={peso} onChange={e => setPeso(e.target.value)} placeholder='Peso' />

                        <button type="button" onClick={() => addExercise()}>+</button>
                    </div>

                    <button type="submit" onClick={e => guardarRutina(e)}>Guardar Rutina</button>
                </div>
            </form>
        </div>

    );
}
