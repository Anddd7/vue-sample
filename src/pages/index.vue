<!-- 默认主页 ,主要用来展示数据和路由子模块 -->
<template>
  <div id="index">
    <div class="padding-with-footer-menu" :v-loading="loading">
      <timeline timelineTheme="lightblue">
        <div v-for="(notes,$key) in notesOfYear" :key="$key">
          <!-- 年份 -->
          <timeline-title>{{$key}}</timeline-title>
          <!-- 内容 -->
          <timeline-item v-for="(note,$index) in notes"
                         :key="note.id"
                         v-bind:color="getColor(note,$index)"
                         v-bind:lineColor="getLineColor(note,$index)"
                         v-bind:hollow="getHollow(note,$index)">
            {{note.title}}
            <br/>
            <el-tag v-for="(tag,$index) in note.tags" :key="$index">
              {{tag}}
            </el-tag>
          </timeline-item>
        </div>

        <el-row type="flex" justify="space-around">
          <el-col :span="8">
            <el-button class="load-more-button" v-on:click='loadMoreNotes'
                       :icon="this.hasNext?'el-icon-loading':'el-icon-minus'">
              {{this.hasNext ? '加载更多' : '无更多数据'}}
            </el-button>
          </el-col>
        </el-row>
      </timeline>
    </div>
    <footer-menu/>
  </div>
</template>

<script>
  import {
    Timeline, TimelineItem,
    TimelineTitle
  } from '../components/vue-cute-timeline'
  import FooterMenu from "../components/footer-menu/footer-menu";

  export default {
    components: {
      FooterMenu,
      Timeline,
      TimelineItem,
      TimelineTitle
    },
    data() {
      return {
        notesOfYear: null,
        pageNum: 1,
        pageSize: 5,
        hasNext: true,
        loading: false
      }
    },
    activated() {
      console.log("activated");
      if (this.notesOfYear === null) {
        this.initNodes();
      }
    },
    methods: {
      initNodes: function () {
        this.notesOfYear = {};
        this.loadMoreNotes();
      },
      loadMoreNotes() {
        if (!this.hasNext) {
          return;
        }
        this.loading = true;

        this.$Rest.get(`/note/groupByYear`, {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        })
        .then(
          res => {
            this.loading = false;

            const page = res.obj;
            const moreNotesOfYear = page.container;

            this.hasNext = page.hasNext;
            this.pageNum++;

            if (this.notesOfYear === null) {
              this.notesOfYear = moreNotesOfYear;
              return;
            }

            let years = Object.keys(moreNotesOfYear);
            for (let index in years) {
              let year = years[index];
              const moreNotes = moreNotesOfYear[year];
              console.log(year);
              //check if this year existed
              if (this.notesOfYear[year]) {
                this.notesOfYear[year] = this.notesOfYear[year].concat(moreNotes);
              } else {
                this.notesOfYear[year] = moreNotes;
              }
            }
          });
      },
      getColor(note, $index) {
        const colors = this.$Tool.getSystemColors();
        return colors[$index % colors.length];
      },
      getLineColor(note, $index) {
        const colors = this.$Tool.getBorderColors();
        return colors[$index % colors.length];
      },
      getHollow(note, $index) {
        return $index % 3 === 0;
      }
    }
  }
</script>

<style>
  .timeline .timeline-item {
    padding-bottom: 0.8rem;
  }

  .timeline .timeline-item .el-tag {
    margin: 10px 0 0 5px;;
  }

  .load-more-button {
    margin-top: 10px;
  }
</style>
