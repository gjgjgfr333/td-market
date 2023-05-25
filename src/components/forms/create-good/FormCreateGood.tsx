import React, {useState} from 'react';
import './form-create-good.scss'
import '../../../styles/elements/selects.scss'
import '../../../styles/elements/buttons.scss'
import CreateGoodSelects from "./create-good-selects/CreateGoodSelects";
import CreateGoodDescription from "./create-good-description/CreateGoodDescription";
import CreateGoodPhotos from "./create-good-photos/CreateGoodPhotos";
import CreateGoodAdditional from "./create-good-additional/CreateGoodAdditional";
import CreateGoodPrice from "./create-good-price/CreateGoodPrice";
import CreateGoodDimensions from "./create-good-dimensions/CreateGoodDimensions";
import CreateGoodPoints from "./create-good-points/CreateGoodPoints";
import {ICategory, ISections, ISubcategories} from "../../../models/ICategories";
import {useForm, FormProvider} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {IProductCard} from "../../../models/IProductCard";
import {createProductCard} from "../../../store/reducers/shelter/ShelterCreator";
import {useNavigate} from "react-router-dom";

const FormCreateGood = () => {
    const navigation = useNavigate()
    const dispatch = useAppDispatch()
    const methods = useForm();
    const {isCreateGoodCard} = useAppSelector(state => state.shelterReducer)

    const [parentSelectedCategory, setParentSelectedCategory] = useState<ICategory | null>(null);
    const [parentSelectedSubCategory, setParentSelectedSubCategory] = useState<ISubcategories | null>(null);
    const [parentSelectedType, setParentSelectedType] = useState<ISections | null>(null);
    const [description, setDescription] = useState('')
    const [generalImage, setGeneralImage] = useState<File | null>(null)
    const [additionalImages, setAdditionalImages] = useState<File[]>([])
    const [submitButton, setSubmitButton] = useState('');

    const onSubmit = async (data: any) => {
        if (!generalImage
            || additionalImages.length === 0
            || !parentSelectedCategory
            || !parentSelectedSubCategory
            || !parentSelectedType
        ) return;

        try {
            const points = Object.keys(data)
                .filter(key => key.startsWith("checkbox-") && data[key])
                .map(key => key.substring("checkbox-".length));

            const good = {
                categories: {
                    category: parentSelectedCategory._id,
                    subcategory: parentSelectedSubCategory._id,
                    section: parentSelectedType._id
                },
                information: {
                    name: data.name,
                    description: description
                },
                additionalInformation: {
                    material: data.material,
                    recommendations: data.recommendations
                },
                pricesAndQuantity: {
                    price: Number(data.price),
                    priceBeforeDiscount: Number(data.priceDiscount),
                    quantity: Number(data.quantityInStock),
                },
                dimensions: {
                    length: Number(data.length),
                    height: Number(data.height),
                    width: Number(data.width),
                    weight: Number(data.weight)
                },
                deliveryPoints: points
            } as IProductCard
            dispatch(createProductCard(good, generalImage, additionalImages))
            if (isCreateGoodCard) {
                if (submitButton === 'saveButton') {
                    navigation('/shelter/goods');
                } else if (submitButton === 'addGoodButton') {
                    window.location.reload();
                }
            }
        } catch (error) {
            console.error('Error create good:', error);
        }
    };


    return (
        <FormProvider {...methods}>
            <form className={'create'} onSubmit={methods.handleSubmit(onSubmit)}>
                <h3 className={'create__title'}>Создание карточки товара</h3>
                <CreateGoodSelects
                    selectedCategory={parentSelectedCategory}
                    setSelectedCategory={setParentSelectedCategory}
                    selectedSubCategory={parentSelectedSubCategory}
                    setSelectedSubCategory={setParentSelectedSubCategory}
                    selectedType={parentSelectedType}
                    setSelectedType={setParentSelectedType}
                />
                <hr className={'create__divider'}/>
                <CreateGoodDescription description={description} setDescription={setDescription}/>
                <hr className={'create__divider'}/>
                <CreateGoodPhotos
                    generalImage={generalImage}
                    setGeneralImage={setGeneralImage}
                    additionalImages={additionalImages}
                    setAdditionalImages={setAdditionalImages}
                />
                <hr className={'create__divider'}/>
                <CreateGoodAdditional/>
                <hr className={'create__divider'}/>
                <CreateGoodPrice/>
                <hr className={'create__divider'}/>
                <CreateGoodDimensions/>
                <hr className={'create__divider'}/>
                <CreateGoodPoints/>
                <div className={'create__buttons'}>
                    <button
                        type="submit"
                        name="saveButton"
                        className={'button button_dark create__save'}
                        onClick={() => setSubmitButton('saveButton')}
                    >
                        Сохранить
                    </button>
                    <button
                        type="submit"
                        name="addGoodButton"
                        className={'button button_light create__add-good'}
                        onClick={() => setSubmitButton('addGoodButton')}
                    >
                        Добавить ещё карточку товара
                    </button>
                </div>
            </form>
        </FormProvider>
    );
};

export default FormCreateGood;
