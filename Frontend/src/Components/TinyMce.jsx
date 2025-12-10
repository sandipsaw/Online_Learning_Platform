

import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';

const TinyMce = ({ value, onChange }) => {
    // const editorRef  = useRef(null)
  return (
    <div>
        <Editor
      apiKey='6puyys2lu9l1syvstq6t7dung84fguakwx731rjfh3ecpnve'
      value={value}
      onEditorChange={(newValue) => onChange(newValue)}
    //   onInit = {(evt,editor) => editorRef.current = editor}
      initialValue="Welcome to Online Learning Assignment page"
      init={{
        height:500,
        menubar:true,
        plugins: [
          'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount','checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'advtemplate', 'ai', 'uploadcare', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
        ],
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
        uploadcare_public_key: '7f13692ac71b5e56dbce',
      }}
      
    />
    </div>
  )
}

export default TinyMce
