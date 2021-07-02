export const greateSelect = (placeholder = 'en', items = [] ) => {
  placeholder === null ? 'en' : placeholder
  const item = items.map((data, index) => `
    <li class="select__item" data-item=${index + 1} data-value=${data.value}>
    ${data.value}</li>
` )
  const meta = `data-type="input"`
  return `
 <div class="select">
    <div class="select__input" ${meta}>
          <span data-title="placeholder" ${meta}> ${placeholder}</span> 
          <span class="material-icons" data-material="icon" ${meta}>
              arrow_drop_up
          </span>
    </div>
    <div class="select__dropdown" data-type="dropdown">
          <ul class="select__list">         
          ${item.join('')}
          </ul>
    </div>
  </div> 
 `
}
