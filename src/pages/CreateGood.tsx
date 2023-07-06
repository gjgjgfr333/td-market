import React from 'react';
import FormCreateGood from "../components/forms/create-good/FormCreateGood";
import useFetchCard from "../hooks/fetch-card";

const CreateGood = () => {
    const card = useFetchCard();

    return (
        <div style={{width: '100%'}}>
            <FormCreateGood card={card}/>
        </div>
    );
};

export default CreateGood;
