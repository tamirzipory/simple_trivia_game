import { CHANGE_AMOUNT, CHANGE_CATEGORY, CHANGE_DIFFUCULTY, CHANGE_SCORE, CHANGE_TYPE } from "../Consts/questionsConst";

export const handleCategoryChange = (payload) =>(
    {type: CHANGE_CATEGORY, payload,}
);

export const handleDifficultyChange = (payload) =>(
    {type: CHANGE_DIFFUCULTY, payload,}
);

export const handleTypeChange = (payload) =>(
    {type: CHANGE_TYPE, payload,}
);

export const handleAmountChange = (payload) =>(
    {type: CHANGE_AMOUNT, payload,}
);

export const handleScoreChange = (payload) =>(
    {type: CHANGE_SCORE, payload,}
);