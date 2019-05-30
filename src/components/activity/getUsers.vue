<template>
    <div>
        <IaHeader/>
        <section>
            <div class="description-page">
                <img src="src/images/icons/svgs/regular/check-square.svg">
                <span>User list</span>
            </div>
            <div id="example">
                <div id="grid-users"></div>
            </div>
            
        </section>
    </div>
</template>

<script>
import IaHeader from '../../components/layout/header.vue'

export default {
  name: 'app',
  components: {IaHeader},
  data () {
    return{}
  },
  computed: {},
    methods: {},
    mounted(){
        let grid = document.createElement('script');    
        grid.setAttribute('src',"../../src/js/gridUsers.js");
        document.head.appendChild(grid);
    }
}
</script>