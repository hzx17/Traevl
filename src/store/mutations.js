export default {
  CHANGECITY(state,city){
    state.city=city
    try {
      localStorage.city=city
    } catch (error) {}
  }
}