import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Modal from 'react-awesome-modal';
import Icon from '../public/Icon.png';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    display: inline-block;
    height: 64px;
    :hover {
        border-bottom: 5px solid black;
    }
`;

const IconLink = styled(Link)`
    display: flex;
    max-width: 93px;
    height: 32px;
    margin: 23px 0 27px 0;
    margin-bottom: 22px;
    font-family: 'Nanum Myeongjo';
    font-weight: 800;
    font-size: 1.75em;
    line-height: 32px;
    text-decoration: none;
    color: black;
    img {
        width: auto;
        height: 32px;
    }
    div {
        margin-left: 7px;
        width: auto;
        height: 32px;
    }
`;

const HeadBlock = styled.div`
    max-width: 1080px;
    max-height: 144px;
    position: relative;
    margin: 0 auto;
    .Search {
        position: absolute;
        top: 16px;
        right: 0;
        width: 220px;
        height: 32px;
        form {
            display: flex;
            flex-direction: row-reverse;
            input {
                position: absolute;
                right: 0;
                display: ${(props) => props.visible};
                width: 160px;
                height: 36px;
                padding-left: 20px;
                padding-right: 50px;
                border: 1px solid #b3b3b3;
                border-radius: 28px;
                outline: none;
            }
            span {
                position: absolute;
                right: 4px;
                z-index: 1;
                width: 40px;
                height: 40px;
                line-height: 40px;
                font-size: 32px;
                cursor: pointer;
            }
        }
    }
    nav {
        margin-left: -30px;
        height: 64px;
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            li {
                font-weight: 400;
                line-height: 4;
                height: 64px;
                width: 64px;
                text-align: center;
            }
            .login {
                position: absolute;
                right: 0px;
                a {
                    text-decoration: none;
                    color: black;
                }
            }
            .post {
                text-decoration: none;
                position: absolute;
                right: 64px;
                margin: 0;
            }
            div {
                h4 {
                    border-bottom: 1px solid;
                    text-align: center;
                    margin: 0;
                    padding: 10px;
                }
                form .login_div {
                    margin: 20px 0 0 20px;
                    p {
                        font-weight: bold;
                        margin: 20px 0 0 0;
                    }
                    input {
                        width: 92%;
                    }
                    .submit_div {
                        margin-top: 20px;
                        justify-content: space-around;
                        display: flex;
                        flex-direction: row;
                    }
                }
            }
        }
    }
`;

const Head = ({ data, onSearch, onLogin }) => {
    const [visible, setVisible] = useState(false);
    const [searchVisible, setSearchVisible] = useState('none');
    const [search, setSearch] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [suc, setSuc] = useState(false);

    const logindata = { id, pw };

    const onChangeSearch = (e) => setSearch(e.target.value);
    const onChangeId = (e) => setId(e.target.value);
    const onChangePw = (e) => setPw(e.target.value);
    const openModal = () => setVisible(true);
    const closeModal = () => setVisible(false);
    const openSearch = () => setSearchVisible('flex');

    const onSubmitSearch = () => {
        onSearch(search);
    };
    const onSubmitLogin = (e) => {
        e.preventDefault();
        if (id === '') {
            return alert('아이디를 입력해주세요');
        } else if (pw === '') {
            return alert('비밀번호를 입력해주세요');
        }
        onLogin(logindata);
    };
    const logout = () => {
        if (window.confirm('로그아웃 하시겠습니까?')) {
            sessionStorage.removeItem('login');
            if (!sessionStorage.login) {
                setSuc(false);
            }
            setSuc(false);
        }
    };
    useEffect(() => {
        if (sessionStorage.login) {
            setSuc(true);
        }
        if (data) {
            if (data.data.suc) {
                sessionStorage.setItem('login', true);
                setSuc(true);
                closeModal();
                if (!sessionStorage.login) {
                    return alert('로그인 되었습니다.');
                }
            } else {
                return alert('아이디나 비밀번호가 맞지 않습니다.');
            }
        }
    }, [data]);
    return (
        <HeadBlock visible={searchVisible}>
            {/* //////////////////////////////////////////////////////////// */}
            <IconLink to="/">
                <img src={Icon} alt="냄비"></img>
                <div> 냄비</div>
            </IconLink>
            <div className="Search">
                <form onSubmit={onSubmitSearch} action={`/Search/${search}`}>
                    <span className="material-icons" onClick={openSearch}>
                        search
                    </span>
                    <input
                        value={search}
                        onChange={onChangeSearch}
                        placeholder="검색어를 입력하세요"
                    />
                </form>
            </div>
            {/* //////////////////////////////////////////////////////////// */}
            <nav>
                <ul>
                    <li>
                        <StyledLink to="/">홈</StyledLink>
                    </li>
                    {suc ? (
                        <li className="login" onClick={logout}>
                            <StyledLink to="/">로그아웃</StyledLink>
                        </li>
                    ) : (
                        <li className="login" onClick={openModal}>
                            <StyledLink to="/">로그인</StyledLink>
                        </li>
                    )}
                    {suc ? (
                        <li className="post">
                            <StyledLink to="/post">글쓰기</StyledLink>
                        </li>
                    ) : null}
                    <Modal
                        visible={visible}
                        width="400"
                        height="300"
                        effect="fadeInDown"
                        onClickAway={closeModal}
                    >
                        <div>
                            <h4>로그인</h4>
                            <form onSubmit={onSubmitLogin}>
                                <div className="login_div">
                                    <div className="login_input_div">
                                        <p> ID </p>
                                        <input
                                            value={id}
                                            onChange={onChangeId}
                                            type="text"
                                            name="id"
                                        />
                                    </div>
                                    <div className="login_input_div">
                                        <p> Password </p>
                                        <input
                                            value={pw}
                                            onChange={onChangePw}
                                            type="password"
                                            name="password"
                                        />
                                    </div>
                                    <div className="submit_div">
                                        <div>
                                            <input
                                                type="submit"
                                                value="로그인"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="button"
                                                value="취소"
                                                onClick={closeModal}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Modal>
                </ul>
            </nav>
        </HeadBlock>
    );
};

export default Head;
