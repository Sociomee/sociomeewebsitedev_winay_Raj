import * as types from '../Constants/index';
import axios from 'axios';

const getAllGroupCategory = (allGroupCategory) => ({
    type: types.GET_ALL_GROUP_CATEGORY,
    payload: allGroupCategory,
});

// get all group categoryes
export const loadAllGroupCategorys = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('user'));
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };
        // console.log("config is there ",config)
        if (user) {
            axios.get(`https://apiserver.msgmee.com/group/category/getAll`, config)
                .then((res) => {
                    console.log("reponse categoryes:", res);
                    dispatch(getAllGroupCategory(res.data))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
