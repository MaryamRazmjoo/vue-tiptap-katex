import { Node, mergeAttributes } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-2'
import TiptapInteractiveImageUpload from './TiptapInteractiveImageUpload'

export default Node.create({
    name: 'TiptapInteractiveImageUploadInline',

    group: 'inline',

    atom: true,
    inline: true,

    draggable: true,

    addAttributes() {
        return {
            url: {
                default: '',
            },
            width: {
                default: 0
            },
            height: {
                default: 0
            },
            token: {
                default: ''
            },
            upload: {
                default: ''
            },
            justify: {
                default: 'center'
            },
            inline: {
                default: true
            },
            vertical: {
                default: 0
            },
            horizontal: {
                default: 0
            }
        }
    },

    parseHTML() {
        return [
            {
                tag: 'tiptap-interactive-image-upload-inline',
            },
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return ['tiptap-interactive-image-upload-inline', mergeAttributes(HTMLAttributes)]
    },

    addNodeView() {
        return VueNodeViewRenderer(TiptapInteractiveImageUpload)
    },
})
