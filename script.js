// Get the editor and toolbar elements
const editor = document.querySelector('.editor')
const toolbar = document.querySelector('.toolbar')

// Add event listeners for the toolbar buttons
toolbar.addEventListener('click', e => {
  if (e.target.matches('.bold')) {
    document.execCommand('bold', false, null)
  } else if (e.target.matches('.italic')) {
    document.execCommand('italic', false, null)
  } else if (e.target.matches('.underline')) {
    document.execCommand('underline', false, null)
  } else if (e.target.matches('.align-left')) {
    document.execCommand('justifyLeft', false, null)
  } else if (e.target.matches('.align-center')) {
    document.execCommand('justifyCenter', false, null)
  } else if (e.target.matches('.align-right')) {
    document.execCommand('justifyRight', false, null)
  }
})

// Add event listeners for font-size and font-family select elements
toolbar.querySelector('.font-size').addEventListener('change', e => {
  document.execCommand('fontSize', false, e.target.value)
})
toolbar.querySelector('.font-family').addEventListener('change', e => {
  document.execCommand('fontName', false, e.target.value)
})

// Add event listener for the editor to save changes made
editor.addEventListener('input', e => {
  localStorage.setItem('document', editor.innerHTML)
})

// Load the saved document content if any
if (localStorage.getItem('document')) {
  editor.innerHTML = localStorage.getItem('document')
}