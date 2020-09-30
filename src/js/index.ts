new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        name: "",
        greeting: ""
    },
    methods: {
        sayUpper() {
            console.log("Your string: " + this.name)
            if (this.name == "") {
                this.greeting = "Your string: NoString"
            }
            else {
                this.greeting = this.name.toUpperCase();
            }
        },

        sayLower() {
            console.log("Your string: " + this.name)
            if (this.name == "") {
                this.greeting = "Your string: NoString"
            }
            else {
                this.greeting = this.name.toLowerCase();
            }
        }

    }
})