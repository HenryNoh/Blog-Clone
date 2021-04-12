import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { categoryList } from '../modules/lists';
import CategoryLists from '../components/Category';

const CategoryContainer = (category) => {
    const { data, loading, error } = useSelector((state) => state.lists.lists);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(categoryList(category));
    }, [category, dispatch]);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;
    return <CategoryLists lists={data} />;
};

const CategoryPage = ({ match }) => {
    const category = match.params.child;
    return <CategoryContainer category={category} />;
};

export default CategoryPage;
