import Vue from 'vue/dist/vue.js'


new Vue({
    el: '#example',
    data() {
        return {
            id: 1,
            tags: [{text: 'hello', id:0}, {text: 'world', id:1}],
        }
    },
    mounted(){
        // _eventBus.$on('focus.vue-tagsinput',($el) => {
        //     console.log('focus')
        // })
        // _eventBus.$on('blur.vue-tagsinput',($el) => {
        //     console.log(`inactive input with value: ${$el.value}`)
        // })
    },
    methods: {
        insertTag(text) {
            this.id += 1
            return {id: this.id, text}
        },
        renderTag(item) {
            return `**${item.text}**`
        },
        setRO(item) {
            return item.id === 0
        },
        validator(item) {
            return /^\w*$/.test(item.text)
        }
    },
    components: {
        'tags-input': require('./input.vue')
    }
})
