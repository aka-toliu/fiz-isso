import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-card-registro',
  templateUrl: './card-registro.component.html',
  styleUrls: ['./card-registro.component.scss']
})
export class CardRegistroComponent implements OnInit, OnDestroy, AfterViewInit {



  @Input() public titulo!: string;
  @Input() public icone!: string;
  @Input() public cor!: string;
  @Input() public status!: string;
  @Input() public periodo!: string;
  @Input() public horario!: string;
  @Input() public repeticao!: string;
  @Input() public historico!: any;
  @Input() public key!: string;
  @Input() public proximoRegistro!: any;




  selected: boolean = false;
  user: any = localStorage.getItem('user');
  userID: any = JSON.parse(this.user).uid;
  reseted: boolean = false;

  card: any;


  historicoDB: any = [];


  verify: any;


  constructor(private firebaseService: FirebaseService, private _elementRef: ElementRef) { }

  ngOnInit(): void {

    this.historicoDB.push(Object.entries(this.historico));

    const prox = new Date(this.proximoRegistro).getTime();

    let elem = this._elementRef.nativeElement.querySelector('.card-registro');

    this.compararDataEHora(prox, elem)

    this.verify = setInterval(this.compararDataEHora, 10000, prox, elem)

  }

  ngAfterViewInit() {
    // this.card = this._elementRef.nativeElement.querySelector('.card-registro');
  }

  ngOnDestroy(): void {
    clearInterval(this.verify)
  }

  adicionarDias(frequencia: string) {

    // console.log(this.proximoRegistro);

    let hoje = new Date();

    let calcMonth = hoje.getMonth() < 10 ? ('0' + (hoje.getMonth() + 1)) : (hoje.getMonth() + 1);

    let calcDay = hoje.getDate() < 10 ? ('0' + hoje.getDate()) : hoje.getDate();


    // const data = this.proximoRegistro.split('T');

    // const fragmentData = data.split('-')

    // console.log(`${hoje.getFullYear()}-${calcMonth}-${hoje.getDate()}T${this.horario}:00 UTC`);


    const novaData = new Date(`${hoje.getFullYear()}-${calcMonth}-${calcDay}T${this.horario}:00`);

    console.log('next', novaData)

    if (frequencia === 'diaria') {
      novaData.setDate(novaData.getDate() + 1);
    }
    else if (frequencia === 'semanal') {
      novaData.setDate(novaData.getDate() + 7);
    }
    else if (frequencia === 'quinzenal') {
      novaData.setDate(novaData.getDate() + 15);
    }

    return novaData;
  }

  onResetStatus() {

    const registro = {
      cor: this.cor,
      icone: this.icone,
      status: status,
      titulo: this.titulo,
      repeticao: this.repeticao,
      proximoRegistro: this.proximoRegistro,
      historico: []
    }
    

    console.log(registro);
    


    // this.firebaseService.update(this.userID, registro, this.key, 'update');
  }

  onChangeStatus(status: string, event: any) {

    console.log('add:', this.adicionarDias(this.repeticao));



    let calcMonth = new Date().getMonth() < 10 ? ('0' + (new Date().getMonth() + 1)) : (new Date().getMonth() + 1);

    let calcDay = new Date().getDate() < 10 ? ('0' + new Date().getDate()) : new Date().getDate();

    let data = `${calcDay}-${calcMonth}-${new Date().getFullYear()}`

    let lastHistorico = this.historicoDB[0] ? this.historicoDB[0][this.historicoDB[0].length - 1] : null;








    // if(this.selected){
    const registro = {
      cor: this.cor,
      icone: this.icone,
      status: status,
      titulo: this.titulo,
      repeticao: this.repeticao,
      proximoRegistro: this.adicionarDias(this.repeticao)
    }

    const historico = {

      status: status,
      horario: this.horario,
      cor: this.cor,
      icone: this.icone,
      titulo: this.titulo,
      repeticao: this.repeticao,
      dataCriacao: `${calcDay}-${calcMonth}-${new Date().getFullYear()}`,
      fullDate: Date.now()

    }





    if (status === 'fiz') {
      event.parentNode.classList.add('btn-anim--fiz')
    }

    if (status === 'vish') {
      event.parentNode.classList.add('btn-anim--vish')
    }

    setTimeout(() => {


      if (lastHistorico) {

        console.log(lastHistorico[1].dataCriacao, data, lastHistorico[1].dataCriacao === data);

        if (lastHistorico[1].dataCriacao === data) {

          this.firebaseService.deleteHistorico(this.userID, this.key, lastHistorico[0])
          this.firebaseService.update(this.userID, registro, this.key, 'update');
          this.firebaseService.insertHistorico(this.userID, historico, this.key);

        } else {
          this.firebaseService.update(this.userID, registro, this.key, 'update');
          this.firebaseService.insertHistorico(this.userID, historico, this.key);
        }
      } else {
        this.firebaseService.update(this.userID, registro, this.key, 'update');
        this.firebaseService.insertHistorico(this.userID, historico, this.key);
      }


      event.parentNode.classList.remove('btn-anim--fiz', 'btn-anim--vish')
    }, 600);

    // }

  }



  compararDataEHora(params: any, elem: any) {



    const proximaData = params;
    const dataAtual = new Date().getTime();

    // console.log('>>>>>',elem);


    // let elem = this._elementRef.nativeElement.querySelector('.card-registro');

    if (proximaData === dataAtual) {
      this.status = 'waiting'
      console.log(0);

      // this.selected = true;
      // return 0; 
      // Datas e horas são iguais
    } else if (proximaData < dataAtual) {
      this.status = 'waiting'
      // this.selected = true;
      console.log(-1, this.status);
      elem.classList.remove('fiz', 'vish')
      // console.log(elem);

      // return -1; 
      // proximaData é anterior a dataAtual
    } else {
      console.log(1);

      // return 1; 
      // proximaData é posterior a dataAtual
    }
  }

  deselect() {
    setTimeout(() => {
      this.selected = false;
    }, 100);
  }

  reset() {

  }


}
