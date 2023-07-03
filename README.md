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
*  Um sistema de recomendações de livros é uma aplicação que utiliza algoritmos de machine learning e inteligência artificial para recomendar livros aos usuários, com base em seus interesses e histórico de leitura. 
* Esse tipo de sistema tem se tornado cada vez mais popular, especialmente com o aumento do comércio eletrônico de livros e a popularidade dos dispositivos de leitura digital, como tablets e e-readers.
*  Os sistemas de recomendações de livros geralmente utilizam dados como as preferências do usuário, seu histórico de leitura, avaliações de livros e informações sobre as características dos livros, como gênero, autor e editora, para fornecer sugestões personalizadas. Esses sistemas têm como objetivo tornar mais fácil para os usuários descobrir novos livros que possam ser de seu interesse, tornando a experiência de compra e leitura mais satisfatória e eficiente.
*  Em resumo, nosso aplicativo de sistema de recomendações terá como objetivo auxiliar o leitor a encontrar livros com base nas suas leituras, pois muitas vezes o leitor tem dificuldade em saber mais sobre o livro sem "spoilers".

# Problemas Listados
 Sobrecarga de opções: Com a grande quantidade de livros disponíveis no mercado, muitas vezes é difícil para os usuários encontrarem livros que sejam do seu interesse. Um sistema de recomendações pode ajudar a filtrar as opções e apresentar sugestões relevantes.

* Descoberta de novos livros: Alguns usuários podem ter dificuldades em encontrar livros que nunca ouviram falar ou que não estão presentes nas listas de mais vendidos. Um sistema de recomendações pode ajudar a descobrir novos títulos com base nos interesses do usuário.

* Personalização: Cada usuário tem suas próprias preferências de leitura e um sistema de recomendações pode fornecer sugestões personalizadas com base em seus históricos de leitura, avaliações e interesses.

* Eficiência na busca: O sistema de recomendações pode ajudar a tornar a busca por livros mais eficiente, ao apresentar resultados mais relevantes e personalizados, economizando tempo do usuário.

* Aumento de vendas: Um sistema de recomendações eficiente pode aumentar as vendas de livros, ao apresentar sugestões relevantes e personalizadas aos usuários, incentivando a compra de livros que talvez não fossem considerados em outras circunstâncias.

# Avaliação de Portifólio



Total = 70%

* Apresentação	            25%
* Documentação	            20%
* Estruturas de Engenharia	25%

# Funcionalidade UI


* Cadastro: Informar os seus dados para realizar o cadastramento no sistema para após ter acesso regular ao sistema.

  ![Cadastro](Images/Register.png)

* Login: Tem como objetivo informar os seus dados para realizar o login e ter acesso ao sistema.

  ![Login](Images/Login.png)


* Recomendados: O sistema em base dos livros inseridos em sua perfil irá indicar titulos parecidos, trazendo para o usuário seu nome e seu respectivo autor.

   ![Login](Images/NewBooks.png)

* Perfil: Trás informações dos livros inseridos e salvos pelo usuário.

* Tela principal: Aparecem livros aleatórios que o usuário pode visualizar/baixar.

   ![Login](Images/PrincipalScreen.png)

# Backend(IA)

* Com a base de livros da API do Google Books, a IA processa as informações e encontra livros semelhantes com base em critérios de similaridade.
   
* Para usar este trecho de código, você pode seguir estas etapas:

* Certifique-se de ter o Python instalado em seu ambiente. Copie o código e cole-o em um arquivo com a extensão .ipynb (por exemplo, SEULIVRO.ipynb). Execute o arquivo em um ambiente Python, como Jupyter Notebook ou Google Colab.

* Foi utilizada a teclonogia chamada de TF-IDF que combina o TF e o IDF para atribuir um valor numérico a cada termo em um documento. O resultado é uma representação vetorial em que cada dimensão representa um termo e o valor do elemento indica a importância desse termo no documento.

* A representação vetorial do TF-IDF é frequentemente usada para alimentar modelos de aprendizado de máquina em tarefas de NLP, como classificação de texto, agrupamento de documentos, recuperação de informações e muito mais.

## Como o código funciona em si ?
* A função buscar_info_livro(titulo) é responsável por fazer uma chamada à API do Google Books para obter informações sobre um livro com base no título fornecido. Ela retorna um dicionário contendo as informações relevantes do livro, como título, autor, gênero e sinopse.
  ```python
  def buscar_info_livro(titulo):
    url = f"https://www.googleapis.com/books/v1/volumes?q={titulo}"
    response = requests.get(url)
    data = json.loads(response.text)
    if data["totalItems"] > 0:
        book_info = data["items"][0]["volumeInfo"]
        return book_info
    return None

* A função obter_recomendacoes_livros(livros, user_preference, livros_recomendados) recebe uma lista de livros, a preferência do usuário e uma lista de livros já recomendados anteriormente. Ela itera sobre os livros fornecidos e chama a função buscar_info_livro para obter as informações relevantes de cada livro.
  ```python
  def obter_recomendacoes_livros(livros, user_preference, livros_recomendados):
    book_infos = []
    for livro in livros:
        if livro not in livros_recomendados:
            livro_info = buscar_info_livro(livro)
            if livro_info:
                book_infos.append(livro_info)

* Em seguida, a função cria um vetorizador TF-IDF usando a classe TfidfVectorizer do scikit-learn. Ele processa as sinopses dos livros obtidas anteriormente e cria uma matriz de características TF-IDF a partir dessas sinopses.
  ```python
  corpus = [livro["sinopse"] for livro in relevant_info]
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(corpus)

* A função calcula a similaridade entre as sinopses dos livros e a preferência do usuário usando o algoritmo de similaridade do cosseno. O vetor TF-IDF da preferência do usuário é calculado e comparado com a matriz TF-IDF das sinopses dos livros. Isso resulta em uma medida de similaridade entre cada livro e a preferência do usuário.
  ```python
  user_vector = vectorizer.transform([user_preference])
    similarities = cosine_similarity(user_vector, tfidf_matrix)
    similar_indices = similarities.argsort()[0][-2::-1]


* Com base na similaridade calculada, a função obtém os índices dos livros mais similares e retorna uma lista de recomendações contendo as informações relevantes desses livros.
  ```python
  recomendacoes = [relevant_info[i] for i in similar_indices]

* A lista de livros recomendados é atualizada e retornada pela função. Os livros recomendados são adicionados à lista livros_recomendados para evitar recomendações duplicadas.
  ```python
  for livro in recomendacoes:
        livros_recomendados.append(livro["titulo"])

    return recomendacoes

* No exemplo de uso, uma lista de livros, a preferência do usuário e uma lista vazia de livros recomendados são fornecidos. A função obter_recomendacoes_livros é chamada para obter as recomendações com base nas preferências do usuário.

* Por fim, as recomendações são impressas, mostrando o título, autor, gênero e sinopse de cada livro recomendado. Se nenhuma recomendação for encontrada, uma mensagem apropriada é exibida.
  ```
  Livros recomendados:
  Título:  Negócios na Internet
  Autor:  On Line Editora
  Gênero:  Business & Economics
  Sinopse:  Reunir as melhores matérias publicadas na Meu Próprio Negócio sobre o mundo digital já entrou para as tarefas anuais da redação. Afinal, não tem interesse mais crescente entre nossos leitores do que o empreendedorismo e boas ações de gestão que envolvam a web e suas tantas ferramentas. Para que você conte com um bom apanhado de informações que possam tanto inspirá-lo a novos negócios quanto ajudá-lo a incrementar o seu, confira o resultado desta edição especial Negócios na Internet.
  
  Título:  American Muscle Cars 2022
  Autor:  Editors of Motorbooks
  Gênero:  Transportation
  Sinopse:  Behold some of America’s most brutish performance machines in this stunning 16-month wall calendar. American Muscle Cars 2022 features more than a year’s worth of stunning photography depicting beautiful, brawny muscle cars spanning the 1960s to today. With a convenient page that shows the months of September, October, November, and December 2021, followed by individual pages for the months of 2022, this 12” × 12” wall calendar brings you incredible spreads showcasing some of the rarest and most outrageous high-performance cars ever to explode onto the scene. Inside you’ll find powerful offerings from the Dodge, Plymouth, AMC, Chevrolet, Pontiac, and Buick brands. Keep yourself on track while enjoying America’s fastest, rarest, and most glorious high-performance vehicles.



# Bibliotecas utilizadas
* Requests: biblioteca HTTP para fazer requisições à API do Google Books.
* scikit-learn: biblioteca de aprendizado de máquina para calcular similaridade do cosseno e vetorização TF-IDF.
* spaCy: biblioteca de processamento de linguagem natural para o pré-processamento de texto.
