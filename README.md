# Sistema de Recomendação de livros

## Tabela de conteúdos
* [Grupo](#grupo)
* [Introdução](#introducao)
* [Avaliação de Portfólio](#avaliacao)

# Grupo:
* Gabriela Borowiak
* Matheus Duarte
* Vinicius Marostica
* Vitor Tomasi
* Khaue Souza

# Introdução
#### Um sistema de recomendações de livros é uma aplicação que utiliza algoritmos de machine learning e inteligência artificial para recomendar livros aos usuários, com base em seus interesses e histórico de leitura. 
#### Esse tipo de sistema tem se tornado cada vez mais popular, especialmente com o aumento do comércio eletrônico de livros e a popularidade dos dispositivos de leitura digital, como tablets e e-readers.
#### Os sistemas de recomendações de livros geralmente utilizam dados como as preferências do usuário, seu histórico de leitura, avaliações de livros e informações sobre as características dos livros, como gênero, autor e editora, para fornecer sugestões personalizadas. Esses sistemas têm como objetivo tornar mais fácil para os usuários descobrir novos livros que possam ser de seu interesse, tornando a experiência de compra e leitura mais satisfatória e eficiente.
#### Em resumo, nosso aplicativo de sistema de recomendações terá como objetivo auxiliar o leitor a encontrar livros com base nas suas leituras, pois muitas vezes o leitor tem dificuldade em saber mais sobre o livro sem "spoilers".

# Problemas Listados
#### Sobrecarga de opções: Com a grande quantidade de livros disponíveis no mercado, muitas vezes é difícil para os usuários encontrarem livros que sejam do seu interesse. Um sistema de recomendações pode ajudar a filtrar as opções e apresentar sugestões relevantes.

#### Descoberta de novos livros: Alguns usuários podem ter dificuldades em encontrar livros que nunca ouviram falar ou que não estão presentes nas listas de mais vendidos. Um sistema de recomendações pode ajudar a descobrir novos títulos com base nos interesses do usuário.

#### Personalização: Cada usuário tem suas próprias preferências de leitura e um sistema de recomendações pode fornecer sugestões personalizadas com base em seus históricos de leitura, avaliações e interesses.

#### Eficiência na busca: O sistema de recomendações pode ajudar a tornar a busca por livros mais eficiente, ao apresentar resultados mais relevantes e personalizados, economizando tempo do usuário.

#### Aumento de vendas: Um sistema de recomendações eficiente pode aumentar as vendas de livros, ao apresentar sugestões relevantes e personalizadas aos usuários, incentivando a compra de livros que talvez não fossem considerados em outras circunstâncias.

# Avaliação de Portifólio



Total = 70%

* Apresentação	            25%
* Documentação	            20%
* Estruturas de Engenharia	25%

# Funcionalidade UI


#### Cadastro: Informar os seus dados para realizar o cadastramento no sistema para após ter acesso regular ao sistema.

#### Login: Tem como objetivo informar os seus dados para realizar o login e ter acesso ao sistema.

#### Recomendados: O sistema em base dos livros inseridos em sua perfil irá indicar titulos parecidos, trazendo para o usuário seu nome e seu respectivo autor

#### Perfil: trás informações dos livros inseridos e salvos pelo usuário

# Backend(IA)

#### Com a base de livros da API do Google Books, a IA processa as informações e encontra livros semelhantes com base em critérios de similaridade.

#### Para usar este trecho de código, você pode seguir estas etapas:

#### Certifique-se de ter o Python instalado em seu ambiente. Copie o código e cole-o em um arquivo com a extensão .ipynb (por exemplo, SEULIVRO.ipynb). Execute o arquivo em um ambiente Python, como Jupyter Notebook ou Google Colab.

## Como o código funciona em si ?
#### 1- A função buscar_info_livro(titulo) é responsável por fazer uma chamada à API do Google Books para obter informações sobre um livro com base no título fornecido. Ela retorna um dicionário contendo as informações relevantes do livro, como título, autor, gênero e sinopse.

#### 2- A função obter_recomendacoes_livros(livros, user_preference, livros_recomendados) recebe uma lista de livros, a preferência do usuário e uma lista de livros já recomendados anteriormente. Ela itera sobre os livros fornecidos e chama a função buscar_info_livro para obter as informações relevantes de cada livro.

#### 3- Em seguida, a função cria um vetorizador TF-IDF usando a classe TfidfVectorizer do scikit-learn. Ele processa as sinopses dos livros obtidas anteriormente e cria uma matriz de características TF-IDF a partir dessas sinopses.

#### 4- A função calcula a similaridade entre as sinopses dos livros e a preferência do usuário usando o algoritmo de similaridade do cosseno. O vetor TF-IDF da preferência do usuário é calculado e comparado com a matriz TF-IDF das sinopses dos livros. Isso resulta em uma medida de similaridade entre cada livro e a preferência do usuário.

#### 5- Com base na similaridade calculada, a função obtém os índices dos livros mais similares e retorna uma lista de recomendações contendo as informações relevantes desses livros.

#### 6- A lista de livros recomendados é atualizada e retornada pela função. Os livros recomendados são adicionados à lista livros_recomendados para evitar recomendações duplicadas.

#### 7- No exemplo de uso, uma lista de livros, a preferência do usuário e uma lista vazia de livros recomendados são fornecidos. A função obter_recomendacoes_livros é chamada para obter as recomendações com base nas preferências do usuário.

#### 8- Por fim, as recomendações são impressas, mostrando o título, autor, gênero e sinopse de cada livro recomendado. Se nenhuma recomendação for encontrada, uma mensagem apropriada é exibida.

# Bibliotecas utilizadas
#### Requests: biblioteca HTTP para fazer requisições à API do Google Books.
#### scikit-learn: biblioteca de aprendizado de máquina para calcular similaridade do cosseno e vetorização TF-IDF.
#### spaCy: biblioteca de processamento de linguagem natural para o pré-processamento de texto.
