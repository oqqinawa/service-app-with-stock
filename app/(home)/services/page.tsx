import ModalForm from "@/components/modal-form"
import NewServiceForm from "./new-services-form"

const ServicesPage = () => {
  return (
    <div>
      <ModalForm
        buttonTrigger="Add Services"
        title="Add Services"
        subtitle="Add a new Service"
      >
        <NewServiceForm submitTitle="add" disabled />
      </ModalForm>
    </div>
  )
}
export default ServicesPage
