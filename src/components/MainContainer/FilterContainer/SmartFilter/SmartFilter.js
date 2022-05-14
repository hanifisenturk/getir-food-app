import Accordion from "../../../Accordion/Accordion";
import Checkbox from "../../../Checkbox/Checkbox";

const SmartFilter = (props) => {
  return (
    <Accordion title="Akıllı Filtreler">
      <Checkbox
        labelName="Sadece Kampanyalılar"
        option="Sadece Kampanyalı Restoranlar"
      />
      <Checkbox
        labelName="Sadece Gerçek Fotoğraflı"
        option="Sadece Gerçek Fotoğraflı Restoranlar"
      />
      <Checkbox
        labelName="Sadece Müdavimler"
        option="Sadece Müdavim Restoranları"
      />
    </Accordion>
  );
};

export default SmartFilter;
