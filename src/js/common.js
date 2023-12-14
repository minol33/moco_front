export default (property) => {
    property.duration_ms = 800
    property.httpError = function (data) {
        if (data.data) {
            this.$notify({ type: 'error', text: data.data.message, duration: this.duration_ms } )
        }
    }

    property.httpAlert = function (type, text) {
        if (type === 'success') {
            this.$notify({ type: 'success', text: text, duration: this.duration_ms })
        } else if (type === 'error') {
            this.$notify({ type: 'error', text: text, duration: this.duration_ms })
        } else if (type === 'info') {
            this.$notify({ type: 'info', text: text, duration: this.duration_ms })
        }
    }
}