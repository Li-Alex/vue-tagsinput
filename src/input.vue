<template>
    <div :class="klass.container"
        @mousedown.self.prevent
        @click.self="inputLast"
        >
        <span v-for="(item, index) in selfTags" :key="item[trackBy]">
            <typing :index="index"></typing>
            <tag
                :text="getText(item)"
                :remove="getRemoveHandle(item,index)"
                :valid="validate(item)">
            </tag>
        </span>
        <typing :index="length">
            <span v-if="placeholder" :class="klass.placeholder">{{placeholder}}</span>
        </typing>
    </div>
</template>
<style scoped>
.tags-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.3);
    font-size: 0.75rem;
    padding: 0.1rem 0
}
.placeholder {
    display: inline-block;
    color: #A9A9A9;
    line-height: 2em;
    white-space: nowrap;
}
</style>
<script>
import Vue from 'vue'
import {_E, klass} from './lib'
//
let _tagsInputEventBus = new Vue()
window._tagsInputEventBus = _tagsInputEventBus

export default {
    props: {
        tags: {
            type: Array,
            required: true
        },
        placeholder: {type: String},
        klass: {type: Object, default: () => klass},
        insert: {type: Function, default: text => text},
        render: {type: Function, default: item => item},
        readOnly: {type: Function, default: item => false},
        trackBy: {type: String, default: 'index'},
        validator: [String, Function]
    },
    data(){
        return{
            selfTags: []
        }
    },
    computed: {
        length() {
            return this.selfTags.length
        }
    },
    mounted(){
        this.selfTags = this.tags
        _tagsInputEventBus.$on([_E`insert`],(index,text) => {
            let tag = this.insert(text)
            tag && !this.dedupe(tag) && this.selfTags.splice(index, 0, tag)
        })
        _tagsInputEventBus.$on([_E`activeOther`],(index) => {
            index >= 0
            && index <= this.length
            && _tagsInputEventBus.$emit([_E`active`], index)
        })
        _tagsInputEventBus.$on([_E`remove`], this.removeTag)
    },
    methods: {
        removeTag(index) {
            if (index > -1) {
                let canRM = !this.readOnly(this.tags[index])
                canRM && this.tags.splice(index, 1)
            }
        },
        inputLast() {
            _tagsInputEventBus.$emit([_E`active`], this.length)
        },
        dedupe(tag) {
            if (this.trackBy === 'index') return this.tags.includes(tag)
            else {
                let field = tag[this.trackBy]
                return this.tags.some(item => item[this.trackBy] === field)
            }
        },
        getText(item) {
            return this.render(item)
        },
        getRemoveHandle(item, index) {
            return this.readOnly(item) ? null : this.removeTag.bind(this, index)
        },
        validate(item) {
            let {validator = () => true} = this
            return typeof validator === 'function'
                ? validator(item)
                : new RegExp(validator.toString(), 'g').test(this.render(item))
        }
    },
    components:{
        tag: require('./tag.vue'),
        typing: require('./typing.vue')
    }
}
</script>
