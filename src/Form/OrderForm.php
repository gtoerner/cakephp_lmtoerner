<?php

namespace App\Form;

use Cake\Form\Form;
use Cake\Form\Schema;
use Cake\Validation\Validator;
use Cake\Mailer\Email;

class OrderForm extends Form
{

	protected function _buildSchema(Schema $schema)
	{
		return $schema->addField('email', ['type' => 'string'])
			->addField('team_name', ['type' => 'string'])
			->addField('name', ['type' => 'string'])
			->addField('number', ['type' => 'string'])
			->addField('size', ['type' => 'string']);
	}

	protected function _buildValidator(Validator $validator)
	{
		$validator->add('team_name', 'length', [
			'rule' => ['minLength', 5],
			'message' => 'Team name is required'
		])->add('email', 'format', [
			'rule' => 'email',
			'message' => 'A valid email address is required',
		])->add('size', 'length', [
			'rule' => ['minLength', 2],
			'message' => 'Size is required',
		]);

		return $validator;
	}

	protected function _execute(array $data)
	{
		// Send an email.
		$email = new Email('default');
		$email->from([$data['email']=> $data['name']])->to('info@lmtoe.com')->subject('New Contact')->emailFormat('html')->send($data['body']);
		return true;
	}
}