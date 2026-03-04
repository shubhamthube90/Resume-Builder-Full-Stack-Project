package in.shubham.resumebuilderapi.exception;

public class ResourceExistsException extends RuntimeException{

    public ResourceExistsException(String message) {
        super(message);
    }
}
