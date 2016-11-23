<template>
    <span :class="klass.gap" @click="begin">
        <input type="text"
            :class="klass.input"
            :style="{width: base + charLen(text) + 'ch'}"
            ref='input'
            v-model="text"
            @mousedown="preventNativeActive"
            @blur="finish(true)"
            @keydown="keyPress" />
            <slot v-if="!typing"></slot>
    </span>
</template>
<style scoped>
input.input {
    outline: none;
    box-shadow: none;
    border: none;
    background-color: transparent;
    font-family: monospace;
    padding: 0 0.5ch;
    line-height: 2em;
}
.gap {

}
</style>
<script>
import Vue from 'vue'
import {KEY_CODE, E, _E} from './lib'
export default {
    props: {
        index: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            typing: false,
            text: ''
        }
    },
    computed: {
        base() {
            return this.typing ? 2 : 0
        },
        klass() {
            return this.$parent.klass
        }
    },
    watch: {
        typing(val) {
            val && Vue.nextTick(_ => {
                let $el = this.$refs.input
                $el.focus()
                _tagsInputEventBus.$emit([E`focus`], $el)
            })
        }
    },
    mounted(){
        _tagsInputEventBus.$on([_E`active`],index => {
            this.typing = index === this.index
        })
    },
    methods: {
        preventNativeActive(e) {
            if (!this.typing) e.preventDefault()
        },
        begin() {
            this.typing = true
        },
        finish(inactive = true) {
            let result = this.text.trim()
            if (result) {
                _tagsInputEventBus.$emit([_E`insert`], this.index, result)
                this.text = ''
            }
            if (inactive === true) {
                this.typing = false
                _tagsInputEventBus.$emit([E`blur`], this.$refs.input)
            }
        },
        charLen(str) {
            let charNum = 0
            for (let i = 0; i < str.length; ++i) {
                charNum += str.charCodeAt(i) > 127 ? 2 : 1
            }
            return charNum
        },
        keyPress(e) {
            let $input = this.$refs.input
            let cursor = $input.selectionStart
            let valLen = $input.value.length
            let key = e.keyCode
            let native = false

            if (key === KEY_CODE.RIGHT && valLen === 0) {
                _tagsInputEventBus.$emit([_E`activeOther`], this.index + 1)
            } else if (key === KEY_CODE.LEFT && valLen === 0) {
                _tagsInputEventBus.$emit([_E`activeOther`], this.index - 1)
            } else if (key === KEY_CODE.BACKSPACE && cursor === 0) {
                _tagsInputEventBus.$emit([_E`remove`], this.index - 1)
            } else if (key === KEY_CODE.TAB) {
                this.finish(false)
            } else native = true

            !native && e.preventDefault()
        }
    }
}
</script>