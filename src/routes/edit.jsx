// routing
import { Form, redirect, useLoaderData, useNavigate } from 'react-router-dom'

// contacts
import { updateContact } from '../contacts'

export async function action ({ request, params }) {
  const { contactId } = params

  const formData = await request.formData()
  const updates = Object.fromEntries(formData)
  await updateContact(contactId, updates)
  return redirect(`/contacts/${contactId}`)
}

export default function Edit () {
  const { contact } = useLoaderData()
  const navigate = useNavigate()

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          type="text"
          placeholder="First"
          aria-label="First name"
          name="first"
          defaultValue={contact.first}
        />
        <input
          type="text"
          placeholder="Last"
          aria-label="Last name"
          name="last"
          defaultValue={contact.last}
        />
      </p>

      <label>
        <span>Twitter</span>
        <input
          type="text"
          placeholder="@fcastroagus"
          name="twitter"
          defaultValue={contact.twitter}
        />
      </label>

      <label>
        <span>Avatar URL</span>
        <input
          type="text"
          placeholder="https://example.com/avatar.jpg"
          name="avatar"
          aria-label="Avatar URL"
          defaultValue={contact.avatar}
        />
      </label>

      <label>
        <span>Notes</span>
        <input type="text" name="notes" defaultValue={contact.notes} />
      </label>

      <p>
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate(-1)}>Cancel</button>
      </p>
    </Form>
  )
}
