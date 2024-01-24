import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function HomeBody() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="mt30 mb30">
            <Card title="Página inicial" />
          </div>
          <div className="dflex">
            <Link to="/sales">
              <Button text="Ver pormoção" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
