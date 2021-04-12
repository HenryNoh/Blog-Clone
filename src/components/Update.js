import React, { useState } from 'react';
import Select from 'react-select';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';

const UpdateBlock = styled.form`
    *:focus {
        outline: none;
    }
    margin: 0 auto;
    max-width: 1080px;
    min-height: 740px;
    padding: 40px;
    .css-2b097c-container {
        font-size: 13px;
        line-height: 15px;
        height: 30px !important;
        width: 170px;
        div {
            z-index: 100;
        }
    }
    .title {
        height: 42px;
        width: 1080px;
        border: 0;
        padding: 0 0 20px 0;
        border-bottom: 1px solid #999;
        margin: 30px 0 30px 0;
        line-height: 40px;
        font-size: 30px;
        outline: none;
    }
    .ck.ck-toolbar {
        background-color: white;
        border: 0;
        border-bottom: 1px solid #999 !important;
    }
    div.ck.ck-reset.ck-editor.ck-rounded-corners
        > div.ck.ck-editor__main
        > div {
        height: 740px;
        margin-bottom: 20px;
        color: black;
        border: 0;
        box-shadow: none;
    }
    button {
        border-radius: 22px;
        height: 40px;
        width: 88px;
        font-size: 13px;
        background-color: black;
        color: white;
        border: 1px solid black;
        cursor: pointer;
    }
`;
const Update = ({ list, categoryList, onUpdate }) => {
    const options = [];
    if (categoryList) {
        categoryList.data.map((parent) =>
            parent.parent_id === 0
                ? (options.push({
                      value: parent.name,
                      label: parent.name,
                  }),
                  categoryList.data.map((child) => {
                      if (child.parent_id === parent.id) {
                          return options.push({
                              value: child.name,
                              label: '- ' + child.name,
                          });
                      } else {
                          return null;
                      }
                  }))
                : null
        );
    }

    const [title, setTitle] = useState(list.title);
    const [text, setText] = useState(list.text);
    // eslint-disable-next-line
    const [id, setId] = useState(list.id);
    const [category, setCategory] = useState(list.category);
    const defaultValue = { value: category, label: category };
    const result = { title, text, id };
    const onChangeTitle = (e) => setTitle(e.target.value);
    const onChangeText = (data) => setText(data);
    const onChangeCategory = (e) => {
        setCategory(e.value);
    };
    const onSubmit = (e) => {
        if (window.confirm('수정하시겠습니까?')) {
            onUpdate(result);
            setTitle('');
            setText('');
            setCategory('');
        }
    };
    return (
        <UpdateBlock onSubmit={onSubmit} action="/">
            <Select
                onChange={onChangeCategory}
                options={options}
                defaultValue={defaultValue}
            />
            <input
                className="title"
                value={title}
                onChange={onChangeTitle}
                placeholder="제목을 입력하세요"
                autoFocus
            />
            <CKEditor
                className="editor"
                editor={ClassicEditor}
                data={text}
                onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    // console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    onChangeText(data);
                }}
                onBlur={(event, editor) => {
                    // console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    // console.log('Focus.', editor);
                }}
            />
            <button type="submit">수정</button>
        </UpdateBlock>
    );
};

export default Update;
