import { useFormContext } from 'react-hook-form';

const CreateGoodAdditional = () => {
    const { register } = useFormContext();

    // const material = watch('material');
    // const recommendations = watch('recommendations');

    // useEffect(() => {
    //     // Действия, которые необходимо выполнить при изменении значений полей
    // }, [material, recommendations]);

    return (
        <div className="description">
            <h3 className="subtitle">Дополнительная информация</h3>
            <div className="description__block">
                <label className="label" htmlFor="material">
                    Материал, состав ткани
                </label>
                <input
                    id="material"
                    className="modalInput description__input"
                    {...register('material')}
                />
            </div>
            <div className="description__block">
                <label className="label" htmlFor="recommendations">
                    Рекомендации
                </label>
                <input
                    id="recommendations"
                    className="modalInput description__input"
                    {...register('recommendations')}
                />
            </div>
        </div>
    );
};

export default CreateGoodAdditional;
