import React from 'react';
import './create-good-photos.scss'

const CreateGoodPhotos = () => {
    return (
        <div>
            <h3 className={'subtitle'}>
                Загрузка фото
            </h3>
            <ol>
                <li>
                    <h4>
                       Главное фото
                    </h4>
                    <p>
                        Загрузите фото, которое будет отображаться в каталоге.<br/>
                        Формат: PNG,JPEG,JPG. Рекомендуемое разрешение - 1080х1440

                    </p>
                    <div className={`image-good`}>
                        <label className={''} htmlFor={'good-photo'}>
                            <img src="'/images/svg/plus.svg'" alt=""/>
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