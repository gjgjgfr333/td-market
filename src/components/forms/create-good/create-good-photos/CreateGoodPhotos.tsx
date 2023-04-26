import React, {ChangeEvent, useState} from 'react';
import './create-good-photos.scss'

const CreateGoodPhotos = () => {
    const [generalImage, setGeneralImage] = useState<File | null>(null)
    const [additionalImages, setAdditionalImages] = useState<File[]>([])

    function onSubmitFile(e: ChangeEvent<HTMLInputElement>) {
        const { files } = e.target;
        const selectedFiles = files as FileList;
        const newImage = selectedFiles?.[0];
        if (newImage && newImage !== generalImage) {
            setGeneralImage(newImage);
        }
    }

    const onDeleteFile = () => {
        setGeneralImage(null)
    }

    function onAdditionalSubmitFile(e: ChangeEvent<HTMLInputElement>) {
        const { files } = e.target;
        const selectedFiles = files as FileList;
        const newImage = selectedFiles?.[0];
        if (newImage && newImage !== generalImage) {
            setAdditionalImages([...additionalImages, newImage]);
        }
    }

    const onDeleteAdditionalFile = (index: number) => {
        if (additionalImages.length > 10) return
        const newImages = [...additionalImages]; // создаем копию массива
        newImages.splice(index, 1); // удаляем элемент по индексу
        setAdditionalImages(newImages); // обновляем состояние массива
    };

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
                        {!generalImage &&
                            <label className={''} htmlFor={'good-photo'}>
                                <img src="/images/svg/plus.svg" alt={''}/>
                                <span>Добавить фото</span>
                            </label>
                        }
                        {generalImage &&
                            <div className={'loadPhoto'}>
                                <img src={URL.createObjectURL(generalImage)} alt="Фото"/>
                                <div onClick={onDeleteFile} className={'loadPhoto__close'}>
                                    <img src="/images/svg/close.svg" alt={''}/>
                                </div>
                            </div>
                        }
                        <input
                            type="file"
                            id={'good-photo'}
                            onChange={onSubmitFile}
                            value={''}
                        />

                    </div>
                </li>
                <li>
                    <h4 className={'add-photos__title'}>
                        Дополнительные фото
                    </h4>
                    <p className={'annotation'}>
                        Можете добавить дополнительные фото товара
                    </p>
                    <div className={'additional-photos'}>
                        <div className={`image-good`}>
                            <label className={''} htmlFor={'good-photo-add'}>
                                <img src="/images/svg/plus.svg" alt={''}/>
                                <span>Добавить фото</span>
                            </label>
                            <input
                                type="file"
                                id={'good-photo-add'}
                                onChange={onAdditionalSubmitFile}
                                value={''}
                            />

                        </div>
                        {
                            additionalImages.map((image, index) => (
                                <div className={'loadPhoto'} key={index}>
                                    <img src={URL.createObjectURL(image)} alt="Фото"/>
                                    <div onClick={() => onDeleteAdditionalFile(index)} className={'loadPhoto__close'}>
                                        <img src="/images/svg/close.svg" alt={''}/>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </li>
            </ol>
        </div>
    );
};

export default CreateGoodPhotos;
