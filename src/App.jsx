import { useForm } from "react-hook-form";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur", // validation à la sortie du champ
    defaultValues: {
      name: "",
      dueDate: "",
      priority: "Basse",
      isCompleted: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Tâche soumise :", data);
    reset(); // Réinitialise le formulaire après soumission
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Ajouter une tâche</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="taskName">
          <Form.Label>Nom de la tâche</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrez un nom"
            {...register("name", { required: "Le nom est requis" })}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="taskDueDate">
          <Form.Label>Date limite</Form.Label>
          <Form.Control
            type="date"
            {...register("dueDate", { required: "La date est requise" })}
            isInvalid={!!errors.dueDate}
          />
          <Form.Control.Feedback type="invalid">
            {errors.dueDate?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="taskPriority">
          <Form.Label>Priorité</Form.Label>
          <Form.Select {...register("priority")}>
            <option value="Basse">Basse</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Élevée">Élevée</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="taskIsCompleted">
          <Form.Check
            type="checkbox"
            label="Tâche complétée"
            {...register("isCompleted")}
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Ajouter
        </Button>
      </Form>
    </Container>
  );
}

export default App;
