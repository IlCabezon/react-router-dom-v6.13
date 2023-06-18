// routing
import { redirect } from 'react-router-dom'

// contacts
import { deleteContact } from '../contacts'

export async function action ({ params }) {
  const { contactId } = params

  await deleteContact(contactId)

  return redirect('/')
}
