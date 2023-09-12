const base_url = 'http://127.0.0.1:8000/ambientes'

async function main() {
  const form = document.getElementById('formulario-dispositivo')

  form.addEventListener('submit', processar)

}

async function processar(event) {

  event.preventDefault()

  const cx_descricao = document.getElementById('descricao')
  const cx_id_ambiente = document.getElementById('id-ambiente')

  const descricao = cx_descricao.value
  const id_ambiente = cx_id_ambiente.value


  const init = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ descricao: descricao })
  }

  const response = await fetch(base_url+'/'+id_ambiente+'/'+'dispositivos', init)

  if (response.ok) {
    alert('Dispositivo Salvo com sucesso!')
    window.location = '/'
  } else {
    alert('Error ao processar!')
  }
}

main()