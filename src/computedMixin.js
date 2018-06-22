export const computedMixin = {

    computed: {
        reservedComputed() {
            return this.text.split("").reverse().join("");
        },
        lowLen() {
            let text = this.text;
            return `${text} (${text.length})`;
        }
    }
};