  const getTemplate = ( data = [], placeholder, selectedId) => {
    let text = placeholder ??  'Some text ...'

     const items = data.map(item => {
       if (item.id === selectedId) {
        text = item.value
       }
       return `
       <li class="select__item" data-type="item" data-value="${item.id}">${item.value}</li>
       `
     })

    return `
    <div class="select__backdrop" data-type="backdrop"></div>
    <div class="select__input" data-type="input">
    <span data-type="current">${text} </span>     
    <i class="fas fa-chevron-down" data-type="arrow"></i></div>
    <div class="select__dropdown">
        <ul class="select__list">
          ${items.join('')}  
        </ul>
    </div>
</div>`
  }
  
  class  Select  {
     constructor(select, options) {
       this.$el = document.querySelector(select)
       this.options = options
       this.selectedId = options.selectedId
       this.#render()
       this.#setup()
      }

      #render() {
           const {data, placeholder} = this.options
            this.$el.classList.add('select')
            this.$el.innerHTML = getTemplate( data, placeholder ,this.selectedId)
      }
      #setup() {
        this.clickHandler = this.clickHandler.bind(this)
         this.$el.addEventListener('click', this.clickHandler)
         this.$arrow = this.$el.querySelector('[data-type ="arrow"]')
         this.$current = this.$el.querySelector('[data-type ="current"]')
      }

      clickHandler(event) {
       const {type , value} = event.target.dataset
    
       if (type === 'input') {
        this.toggle()
       }
      else  if (type === 'item') {
         this.select(value)
       }
        else if (type === 'backdrop') {
          this.close()
        }

      
      }

      get current () {
        return this.options.data.find(item => item.id === this.selectedId )
      }
      get isOpen() {
        return this.$el.classList.contains('open')
      }   
      select (id) {
        this.selectedId = id
        this.$current.textContent = this.current.value
        this.$el.querySelectorAll('[data-type ="item"]').forEach(el => {
          el.classList.remove('selected')
        });
        this.$el.querySelector(`[data-value="${id}"]`).classList.add('selected')
        this.close()

      }
 toggle() {
   this.isOpen ? this.close() : this.open()

 }     
open() {
  this.$el.classList.add('open')
  this.$arrow.classList.remove('fa-chevron-down')
  this.$arrow.classList.add('fa-chevron-up')
   
}
close() {
  this.$el.classList.remove('open')
  this.$arrow.classList.add('fa-chevron-down')
  this.$arrow.classList.remove('fa-chevron-up')
}
destroy() {
 this.$el.removeEventListener('click', this.clickHandler)
 this.$el.innerHTML = ''
}


} 


const select = new Select ('#select', {
     placeholder : ' Please choose  an element...' ,
     selectedId: '3',
     data: [
       {id: '1', value: 'React'},
       {id: '2', value: 'Angular'},
       {id: '3', value: 'Vue'},
       {id: '4', value: 'Next'},
       {id: '5', value: 'Nest'},
       {id: '6', value: 'React Native'},
     ]
})
window.s = select

 