package br.com.cassioliveira.saladereuniao.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
public class ErrorDetails {

    @Getter
    private Date timesTamp;
    @Getter
    private String message;
    @Getter
    private String details;
}
