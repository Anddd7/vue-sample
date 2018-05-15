<template>
  <div id="edit">
    <div class="padding-with-footer-menu">
      <el-form class="noteForm" :model="noteForm" :label-position="labelPosition"
               label-width="60px">
        <el-form-item label="摘要">
          <el-input v-model="noteForm.title" placeholder="请输入标题"/>
        </el-form-item>
        <el-form-item label="标签">
          <input-tag :tags.sync="noteForm.tags"/>
        </el-form-item>
        <el-form-item label="内容">
          <markdown-editor
            v-model="noteForm.content"
            :highlight="true"
            :configs="configs"
            preview-class="markdown-body"
            ref="markdownEditor"/>
        </el-form-item>
      </el-form>
    </div>
    <footer-save-cancel :save-function='save'/>
  </div>
</template>

<script>
  import InputTag from 'vue-input-tag'
  import MarkdownEditor from 'vue-simplemde/src/markdown-editor'
  import hljs from 'highlight.js';
  import FooterSaveCancel from "../../components/footer-save-cancel/footer-save-cancel";

  window.hljs = hljs;
  // 完整示例
  export default {
    components: {
      FooterSaveCancel,
      InputTag,
      MarkdownEditor
    },
    data() {
      return {
        noteForm: {
          id: this.$route.params.id,
          title: '',
          tags: [],
          content: '',
        },
        labelPosition: 'top',
        configs: {
          status: false, // 禁用底部状态栏
          toolbar: ['bold', 'strikethrough', 'code', 'quote', '|',
            'unordered-list', 'ordered-list', 'table', 'horizontal-rule', '|',
            'preview'],
          spellChecker: false // 禁用拼写检查
        }
      }
    },
    created() {
      if (this.noteForm.id !== '-') {
        this.$Rest.get(`/note/${this.noteForm.id}`, res => {
          this.noteForm = res.obj;
        });
      }
    },
    computed: {
      simplemde() {
        return this.$refs.markdownEditor.simplemde
      }
    },
    methods: {
      handleInput() {
        console.log(this.content);
      },
      save() {
        if (this.noteForm.id === '-') {
          //create
          this.$Rest.post('/note',
            this.noteForm, res => {
              const retNoteId = res.obj.id;
              this.$router.push({
                path: `../${retNoteId}/info`,
                query: this.$route.query
              });
            });
        } else {
          //update
          this.$Rest.put(`/note/${this.noteForm.id}`,
            this.noteForm, res => {
              this.$router.push({
                path: 'info',
                query: this.$route.query
              });
            });
        }
      }
    }
  }
</script>

<style>
  @import 'simplemde/dist/simplemde.min.css';
  @import 'github-markdown-css';
  @import 'highlight.js/styles/atom-one-dark.css';
</style>

<style>
  .vue-input-tag-wrapper .input-tag {
    padding: 0 13px !important;
  }

  .vue-input-tag-wrapper .input-tag .remove {
    font-size: 15px !important;
  }
</style>
