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

    property.formatDate = function (date, mark = '-', type = 'date') {
        let t
        date = new Date(date)
        const year = date.getFullYear()
        let month = date.getMonth() + 1
        month = month >= 10 ? month : '0' + month
        let day = date.getDate()
        day = day >= 10 ? day : '0' + day
        switch (type) {
            case 'year' :
                t = year
                break;
            case 'month' :
                t = month
                break;
            case 'day' :
                t = day
                break;
            case 'date' :
                t = year + mark + month + mark + day
                break;
        }
        return t
    }
}