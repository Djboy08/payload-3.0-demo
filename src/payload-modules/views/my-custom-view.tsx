import {DefaultTemplate} from "@payloadcms/ui/templates/Default"
import { AdminViewComponent } from "payload/types"
const MyCustomView: AdminViewComponent = () => {
    // @ts-ignore
    return (<DefaultTemplate>
    <div
      style={{
        paddingLeft: 'var(--gutter-h)',
        paddingRight: 'var(--gutter-h)',
      }}
    >
      <h1>Custom Admin View</h1>
      <p>
        Here is a custom admin view that was added in the Payload config. It uses the Default
        Template, so the sidebar is rendered.
      </p>
      <div >
        <button>
          Go to Dashboard
        </button>
      </div>
    </div>
  </DefaultTemplate>)
}

export default MyCustomView;
