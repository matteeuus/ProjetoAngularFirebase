import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(){
    this.getFuncionarios();
  }

  remover(id: any){
      this.isLoading = true;
      fetch('http://localhost/api/funcionarios/remover_funcionario.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ CodFun: id })
        }
      )
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(erro => {
        console.log(erro);
      })
      .finally(()=>{
        this.isLoading = false;
      })
  }

  isLoading: boolean = false;
  funcionarios: any;

  getFuncionarios(){
    this.isLoading = true;
    fetch('http://localhost/API_Atividade/funcionario/listar_funcionarios.php')
    .then(response => response.json())
    .then(response => {
      this.funcionarios = response.funcionarios;
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
    })
  }
  
}
