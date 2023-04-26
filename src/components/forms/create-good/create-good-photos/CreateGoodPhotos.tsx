import React, {useState} from 'react';
import './create-good-photos.scss'

const CreateGoodPhotos = () => {
    const [generalImage, setGeneralImage] = useState<File | null>(null)

    return (
        <div>
            <h3 className={'subtitle'}>
                Загрузка фото
            </h3>
            <ol className={'add-photos'}>
                <li>
                    <h4 className={'add-photos__title'}>
                       Главное фото
                    </h4>
                    <p className={'annotation'}>
                        Загрузите фото, которое будет отображаться в каталоге.<br/>
                        Формат: PNG,JPEG,JPG. Рекомендуемое разрешение - 1080х1440

                    </p>
                    <div className={`image-good`}>
                        <label className={''} htmlFor={'good-photo'}>
                            <img src="/images/svg/plus.svg" alt=""/>
                            <span>Добавить фото</span>
                            {/*<span>{image ? 'Загружено' : 'Загрузить'}</span>*/}
                        </label>
                        <input
                            type="file"
                            id={'good-photo'}
                            // onChange={onSubmitFile}
                            // ref={inputFileRef}
                        />

                    </div>
                </li>

            </ol>
        </div>
    );
};

export default CreateGoodPhotos;