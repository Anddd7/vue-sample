function getAuthor() {
  return 'And777';
}

export default {
  getAuthor() {
    return getAuthor();
  },
  getSystemColors(){
    return ['#409EFF','#67C23A','#E6A23C','#F56C6C','#909399']
  },
  getBorderColors(){
    return ['#DCDFE6','#E4E7ED','#EBEEF5','#F2F6FC']
  }
}
